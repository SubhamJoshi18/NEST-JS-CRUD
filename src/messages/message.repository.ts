import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  async findall() {
    const content = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(content);

    if (messages.length > 0 || messages) {
      return messages;
    }
  }

  async findbyid(id: number | string) {
    const content = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(content);

    if (messages !== null || messages) {
      return messages[id];
    }
  }

  async patchbyid(id: any, body: any) {
    const newId: number | string = parseInt(id);
    const content = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(content);
    const { content3 } = body;
    if (newId === messages[id]) {
      messages[id] = { id, content3 };
      await writeFile('message.json', JSON.stringify(messages));
    }
  }

  async create(body: any) {
    const content = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(content);

    const id: number = Math.floor(Math.random() * 999);
    messages[id] = { id, body };
    await writeFile('message.json', JSON.stringify(messages));
  }

  async deleting(id: any) {
    const newId: string | number = parseInt(id);
    const content = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(content);

    if (newId === messages[id]) {
      delete messages[id];
      return messages;
    }
  }
}
