const respond = async ({ response, message, say }) => {
  const blocks = response.blocks;
  const text = response.text;
  await say({ blocks, text, thread_ts: message.ts });
};

module.exports = { respond };
