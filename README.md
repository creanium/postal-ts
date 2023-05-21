
# Postal Server SDK for TypeScript

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-github-repo/blob/main/LICENSE)

Welcome to Postal Server SDK for TypeScript! 🎉

This is a friendly and easy-to-use library for interfacing with the open source mail delivery platform, [Postal](https://postal.atech.media/). It's written in TypeScript, to provide type safety and autocompletion for a better developer experience. Our aim is to make sending emails as enjoyable and as painless as possible!

## Installation

You can easily install this SDK with **npm**:

```bash
npm install @widenex/postal-ts
```

Or with **yarn**:

```bash
yarn add @widenex/postal-ts
```

## Usage

Here's a simple example of how to **send an email** ✉️ with this SDK:

```typescript
import { Client } from "@widenex/postal-ts";

const client = new Client("postal.your-domain.com", "your-server-key");

client
  .send({
    from: "contact@your-domain.com",
    subject: "Hello, Postal!",
    body: "This is a simple test email.",
    to: "someone@their-domain.com",
  })
  .then((result) => {
    console.log(`Emails sent: ${result.size}`);
    console.log("Recipients:", result.recipients);
  });
```

## Acknowledgements

Huge thanks to the creators of [Postal](https://github.com/postalserver/postal), the open source mail delivery platform that inspired this project. We are standing on the shoulders of giants! 🙏 Check out their [official documentation](https://docs.postalserver.io) to learn more about what you can do with Postal and this SDK.

## Contributing

As an open source project, we welcome contributions of all sorts! Whether it's filing an issue, fixing a bug, improving documentation, or adding a new feature, your contributions are greatly appreciated. Please take a look at our [Contributing Guidelines](#) for more information on how you can contribute.

## License

This project is licensed under the [MIT License](https://github.com/your-github-repo/blob/main/LICENSE).

## Questions? Need Help?

Please don't hesitate to open an issue if you have any questions or need any help. We're here to help you out! You can also reach us at hello@widenex.com. 

Happy emailing! 💌

---

Made with 🖤 by Widenex
