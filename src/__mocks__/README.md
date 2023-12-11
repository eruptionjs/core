# Mocks

Use this to mock any third party HTTP resources that you don't have running
locally and want to have mocked for local development as well as tests.

## Usage

Each feature must have your own folder with the same name as the feature. Inside, the file must return a `HttpHandler[]` array.

Learn more about how to use this at [mswjs.io](https://mswjs.io/)
