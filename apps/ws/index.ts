import { prismaclient } from "db/clients";

Bun.serve({
    port:8081,
    fetch(req,server){
        if (server.upgrade(req)) {
            return
        }
        return new Response("failed")
    },

    websocket:{
        message(ws,message){
            prismaclient.user.create({
                data:{
                    username:Math.random().toString(),
                    password:Math.random.toString()
                }
            })
            ws.send(message)
        }
    }
})