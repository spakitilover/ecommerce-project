import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './models/users/users.module';
import { ProductModule } from './models/product/product.module';
import { CategoryModule } from './models/category/category.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './models/contact/contact.module';
import { OrderModule } from './models/order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0644758842kkk',
      database: 'BackEndServer',
      entities: ['./*/*.entity.ts'],
      synchronize: true,
    }),
    UsersModule,
    ProductModule,
    CategoryModule,
    AuthModule,
    ContactModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
