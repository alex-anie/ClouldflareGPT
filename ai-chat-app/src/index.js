import {Ai} from '@cloudflare/ai';
import {Hono} from 'hono';

import template from './template.html'

const app = new Hono()

app.get('/', c=> {
	return c.html(template)
})

app.post('/', async c=> {
	const ai = new Ai(c.env.AI)

	const messages = [
		{role: "system", content: "You are a helpful assistant"},
		{role: "user", content: "Hello, how is it going?"}
	]

	const aiResponse = await ai.run(
		'@cf/meta/llama-2-7b-chat-int8',
		{messages}
	)

	return c.text(aiResponse.response)
})

export default app;