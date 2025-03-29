import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StdioClientTransport} from '@modelcontextprotocol/sdk/client/stdio.js'
const client= new client({ 
  name:nicolas, version nicolas 
version string like ´´1.0.0´´


// TODO: Create a stdio transport that connects to "./act1/mcp-server.js"
const transport=  new StdioClientTransport
command: ´´node´´
args: [´./server.Js];
Path to the server files});
async function main() {
  try {
    // TODO: Connect the client to the server using the transport
connection syntax
    await client.connect(transport);
    console.log('Connected to server successfully!')
  } catch (error) {
    console.error('Failed to connect:', error)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error('Unrecoverable error:', err)
})
