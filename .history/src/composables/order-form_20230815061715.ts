export type FormType = 'select' | 'input' | 'checkbox' | 'radio' | 'date' | 'time' | 'datetime' | 'textarea'
export interface FormMiddlewareObj {
  [key: string]: any
}
export type FormMiddleware = FormSubObj | null

export interface FormSubObj {
  type: FormType
  [key: string]: any
  next: (obj: FormMiddlewareObj) => FormSubObj | null
  addMiddleware: (name: string | Array<string>, type: FormType, data?: any) => FormSubObj
}

function wrapperFormObj(type: FormType, data?: any): FormSubObj {
  const middleware: Map<string, FormMiddleware> = new Map()

  const wrapperObj = {
    type,
    ...data,
  }

  const next = (obj: FormMiddlewareObj): FormSubObj | null => {
    const mw = middleware.get(obj.type)

    return mw || null
  }

  const addMiddleware = (name: string | Array<string>, type: FormType, data?: any) => {
    const _ = wrapperFormObj(type, data)

    if (Array.isArray(name))
      [...name].forEach(n => middleware.set(n, _))

    else
      middleware.set(name, _)

    return _
  }

  return {
    ...wrapperObj,
    next,
    addMiddleware,
  }
}

export const orderForm = genOrderForm()

// gen order forms
function genOrderForm() {
  const form = wrapperFormObj('select', {
    labelKey: 'order_type',
    options:
      [
        'MineCraft',
        'Website',
        'Robot',
        'Game',
        'App',
        'Other',
      ],
  })

  form
    .addMiddleware('MineCraft', 'select', {
      labelKey: 'order_type_minecraft',
      options: [
        'Server',
        'Plugin',
        'Mod',
        'Other',
      ],
    })
    .addMiddleware('Plugin', 'select', {
      labelKey: 'mc_plugin_core',
      options: [
        'PaperSpigot',
        'Spigot',
        'CatServer',
        'Mohist',
        'Folia',
        'BungeeCord',
        'Waterfall',
        'Velocity',
        'Other',
      ],
    })
    .addMiddleware([
      'PaperSpigot',
      'Spigot',
      'CatServer',
      'Mohist',
      'Folia',
      'BungeeCord',
      'Waterfall',
      'Velocity',
      'Other',
    ], 'select', {
      labelKey: 'mc_plugin_core',
      options: [
        '1.20.1',
        '1.16.5',
        '1.12.2',
        '1.8.x',
        '1.7.x',
      ],
    })
    .addMiddleware([
      '1.20.1',
      '1.16.5',
      '1.12.2',
      '1.8.x',
      '1.7.x',
    ], 'input', {
      labelKey: 'mc_plugin_name',
      placeholder: 'mc_plugin_name_placeholder',
    })

  return form
}
