import resolveConfigOrigin from '../src/core/default.resolve.config.js'
import validateConfig from '../src/core/validate_config'

jest.setTimeout(30000)

describe('validate schema', () => {
  it('empty', () => {
    expect(validateConfig(resolveConfigOrigin)).toBeTruthy()
  })

  it('custom storage adapter', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        storageAdapter: {
          module: 'resolve-storage-mongo',
          options: {
            collectionName: 'MyEvents'
          }
        }
      })
    ).toBeTruthy()
  })

  it('custom bus adapter', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        storageAdapter: {
          module: 'resolve-bus-rabbitmq',
          options: {}
        }
      })
    ).toBeTruthy()
  })

  it('custom subscribe adapter', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        subscribeAdapter: {
          module: 'resolve-subscribe-mqtt',
          options: {}
        }
      })
    ).toBeTruthy()
  })

  it('custom root path', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        rootPath: 'my-app'
      })
    ).toBeTruthy()
  })

  it('custom static path', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        staticPath: 'my-cdn'
      })
    ).toBeTruthy()
  })

  it('custom routes path', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        routes: 'src/client/entryPoint.js'
      })
    ).toBeTruthy()
  })

  it('custom index path', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        index: 'src/client/index.js'
      })
    ).toBeTruthy()
  })

  it('custom aggregates dir', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        aggregates: []
      })
    ).toBeTruthy()
  })

  it('custom view models dir', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        viewModels: []
      })
    ).toBeTruthy()
  })

  it('custom read models dir', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        readModels: []
      })
    ).toBeTruthy()
  })

  it('custom static dir', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        staticDir: 'my-static-dir'
      })
    ).toBeTruthy()
  })

  it('custom auth', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        auth: {
          strategies: 'custom-auth/index.js'
        }
      })
    ).toBeTruthy()
  })

  it('custom jwt', () => {
    expect(
      validateConfig({
        ...resolveConfigOrigin,
        jwtCookie: {
          name: 'authToken',
          maxAge: 1000 * 60 * 60 * 24 * 365
        }
      })
    ).toBeTruthy()
  })
})

describe('validate schema (fail)', () => {
  it('incorrect storage adapter', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        storageAdapter: {
          module: 123,
          options: {
            collectionName: 'MyEvents'
          }
        }
      })
    ).toThrow()
  })

  it('incorrect bus adapter', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        storageAdapter: {
          module: 123,
          options: {}
        }
      })
    ).toThrow()
  })

  it('incorrect subscribe adapter', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        subscribeAdapter: {
          module: 123,
          options: {}
        }
      })
    ).toThrow()
  })

  it('incorrect root path', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        rootPath: 123
      })
    ).toThrow()
  })

  it('incorrect static path', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        staticPath: 123
      })
    ).toThrow()
  })

  it('incorrect routes path', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        routes: 123
      })
    ).toThrow()
  })

  it('incorrect aggregates dir', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        aggregates: 123
      })
    ).toThrow()
  })

  it('incorrect view models dir', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        viewModels: 123
      })
    ).toThrow()
  })

  it('incorrect read models dir', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        readModels: 123
      })
    ).toThrow()
  })

  it('incorrect static dir', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        staticDir: 123
      })
    ).toThrow()
  })

  it('incorrect auth', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        auth: 123
      })
    ).toThrow()
  })

  it('incorrect jwtCookie', () => {
    expect(() =>
      validateConfig({
        ...resolveConfigOrigin,
        jwtCookie: {
          name: 123,
          secret: 'some-secret',
          options: {
            maxAge: 1000 * 60 * 60 * 24 * 365
          }
        }
      })
    ).toThrow()
  })
})
