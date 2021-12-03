import { Item } from './interfaces/item.interface';
import { Model, Connection } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Connection) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(itemId: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: itemId });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }
}
