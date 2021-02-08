import { Module } from '@nestjs/common';
import { MessagesResolver } from './messages.resolvers';

@Module({
  providers: [MessagesResolver],
  exports: [MessagesResolver],
})
export class MessagesModule {}
