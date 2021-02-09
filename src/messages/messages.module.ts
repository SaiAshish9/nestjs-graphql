import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { MessagesResolver } from './messages.resolvers';

@Module({
  imports:[UsersModule],
  providers: [MessagesResolver],
  exports: [MessagesResolver],
})
export class MessagesModule {}
