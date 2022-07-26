/* eslint-disable @typescript-eslint/ban-types */
import "isomorphic-unfetch"
import { EMethods } from "./apiTypes"
import { serialize } from "object-to-formdata"
import { notification } from "antd"

export const HOST = process.env.REACT_APP_BFF_HOST || ""







const getFilenameFromContentDisposition = (response: Response) => {
  const contentDisposition = response.headers.get("Content-Disposition")
 
  const foundFilenames = contentDisposition ? contentDisposition.match(/filename="(.*)"/) : null
  return foundFilenames !== null && foundFilenames.length >= 1 ? foundFilenames[1] : null
}

const handleResponseFile = (response: Response, file: boolean | string) => {
  return response.blob().then((blob) => {
    const defaultFileName = typeof file === "string" ? file : "DownloadedFile"
    const url = window.URL.createObjectURL(blob)
    const fileName = response.url.split('/')[5].split('?')[0]

    const a = document.createElement("a")
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()

    return response
  })
}

async function handleResponse(response: Response | any, file?: boolean | string) {
  if (response.ok) {
    if (file) {
      return handleResponseFile(response, file)
    }

    const contentType = response.headers.get("content-type")
    if (contentType && contentType.indexOf("text/plain") !== -1) {
      const json = await response.json()
      return json
    } else if (contentType && contentType.indexOf("application/json") !== -1) {
      let json = {}

      try{
         json = await response.json()
      } catch (err) {
        console.error(err)
      }

      return json;
    } else {
      await response.text()
      return {}
    }
  } else {
    // что-то пошло не так - сброс на страницу авторизации:
    switch (response.status) {
      case 400:
       {
    


        break
      }
      case 401:
       if(window.location.pathname !== '/') {
        notification["error"]({
          message: "Ошибка",
          description: "Отказано в доступе",
          duration: 3,
        })
        
       }
       if(window.location.host !== 'localhost:3000' ) {
        localStorage.clear()
        window.location.replace(response.redirect_uri)
       }

        console.debug('ошибка 401');
        break
      default:
        break
    }

    const json_1 = await response.json()
    return await Promise.reject(
      Object.assign({}, json_1, {
        status: response.status,
        statusText: response.statusText,
      })
    )
  }
}

function objectToQueryString(obj: any) {
  
  return (
    "?" +
    Object.keys(obj)
      .map((key) => {
        if (typeof obj[key] == "object") {
          return Object.keys(obj[key])
            .filter((item) => obj[key][item] != undefined)
            .map((item) => {
              if (Array.isArray(obj[key][item])) {
                return obj[key][item]
                  .map((val: string | number) => `${key}[${item}]=${val}`)
                  .join("&")
              } else {
                return `${key}[${item}]=${obj[key][item]}`
              }
            })
            .join("&")
        }
        return `${key}=${obj[key]}`
      })
      .join("&")
  )
}

export interface IHeaders {
  Accept: string
  "Content-Type"?: string
  Application?: string
  User?: string
}

export interface IRequestParams {
  url: string
  host?: string
  method?: EMethods
  type?: string
  headers?: object
  data?: object | string
  file?: boolean | string
  isNotAuthorized?: boolean
}

export type TRequest = <T>(params: IRequestParams) => Promise<T>
export type TRequestMethod = <T>(params: Omit<IRequestParams, "method">) => Promise<T>

export const request: TRequest = (params) => {
  const action: TRequest = (params) => {
    const method = params.method || "GET"
    const isMultipartFormData = params.type === "multipart/form-data"

    let qs = ""
    let body: BodyInit | null = null
    const user = localStorage.getItem("user")

    const defaultHeaders = {
      Accept: "*/*",
    }

    const headers: Record<string, string> = {
      ...defaultHeaders,
      ...params.headers,
    }

    if (!isMultipartFormData) {
      headers["Content-Type"] = "application/json"
    }

    if (!params.isNotAuthorized) {
      headers["User"] = `${user || ""}`
    }

    const data = params.data || {}

    if (isMultipartFormData) {
      body = serialize(data)
    } else if (["GET"].indexOf(method) > -1 && data) {
      // GET

      qs = objectToQueryString(data)
      // headers['access_token'] = `Bearer ${token}`
    } else {
      // POST or PUT

      body = JSON.stringify(data)
      // headers['Content-Type'] = 'text/plain'
    }

    const url = (HOST) + params.url + qs
    return fetch(url, { method, headers, body }).then((response) =>
      handleResponse(response, params.file)
    )
  }
  return action(params)
}

export const get: TRequestMethod = (params) =>
  request(Object.assign({ method: EMethods.GET }, params))
export const post: TRequestMethod = (params) =>
  request(Object.assign({ method: EMethods.POST }, params))
export const put: TRequestMethod = (params) =>
  request(Object.assign({ method: EMethods.PUT }, params))
export const del: TRequestMethod = (params) =>
  request(Object.assign({ method: EMethods.DELETE }, params))
export const patch: TRequestMethod = (params) =>
  request(Object.assign({ method: EMethods.PATCH }, params))
