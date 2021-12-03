import { ItemsService } from './items.service';
import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<Item> {
    return await this.itemsService.findOne(param.id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, description: ${createItemDto.description}, qty: ${createItemDto.qty}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted item ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `updated item ${id} with name: ${updateItemDto.name}, description: ${updateItemDto.description}`;
  }
}
