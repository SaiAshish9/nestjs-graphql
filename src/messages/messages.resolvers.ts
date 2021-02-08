import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MessagesResolver {
  msg = [
    {
      id: 0,
      desc: 'msg',
    },
  ];

  @Query('messages')
  getMessages() {
    return this.msg;
  }

  @Mutation()
  createMessage(@Args('desc') desc: string) {
    const newMsg = {
      id: this.msg.length,
      desc,
    };
    this.msg.push(newMsg);
    return newMsg;
  }

  @Mutation()
  clear(){
      this.msg=[];
      return null
  }
}
