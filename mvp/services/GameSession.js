new {Server}=require("../../socket_poc_chat/server/socket.io");

class GameSession{
    instance=null;

    init(http_server){
        if(this.instance){
            return;
        }
        this.instance=new Server(http_server);

    }

    getInstance(){
        return this.instance;
    }
}
module.exports=GameSession