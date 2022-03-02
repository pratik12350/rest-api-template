# REST API TEMPLATE

### A Simple REST API Template using expressjs

### Features:
> Endpoint logging in console

> Routes handler

> Error Handler for internal server errors, so no crash

> Website support with [EJS](https://ejs.co/)

> Premade List Home page with list of all endpoints (Dynamic)

> Security with [helmet](https://npmjs.com/package/helmet)

> Beautiful JSON


### Endpoint Examples:
> JSON Endpoints
```js
module.exports = {
  route: '/hello,
  run: async (req, res) => {
    res.json({
      hello: 'world'
    })
  }
}
//usage: https://yoursite.com/hello
```
> IMAGE Endpoints, credit: [CoderPopCat](https://github.com/CoderPopCat/)
```js
// Usage: https://yoursite.com/communism?image=https://cdn.popcat.xyz/avatar.png

const Canvas = require("canvas")

module.exports = { 
	name: "communism",
//communism image overlay
	run: async(req, res) => {
	const { image } = req.query;
	if (!image) return res.json({ error: "Please provide an image!" })
	try {
		const overlayAvatarURL = "https://miro.medium.com/max/1024/1*L_uBUcOn1-NvGPQFZ4XlrQ.png"
		const baseAvatar = await Canvas.loadImage(image);
		const overlayAvatar = await Canvas.loadImage(overlayAvatarURL);
		const canvas = Canvas.createCanvas(1024, 1024);
		const ctx = canvas.getContext('2d');
		ctx.globalAlpha = 0.3;
		ctx.drawImage(baseAvatar, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(overlayAvatar, 0, 0, 1024, 1024);
		res.set({ "Content-Type": "image/png" })
		res.send(canvas.toBuffer())
	} catch (error) {
		res.json({ error: "Invalid image!" })
	}
	}
}
```




Made With ❤ By [Pratik](https://github.com/pratik12350)
