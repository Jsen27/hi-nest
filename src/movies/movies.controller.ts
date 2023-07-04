import { Controller, Get, Post, Delete, Patch, Param, Query, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-moive.dto';

@Controller('movies')
export class MoviesController {
	constructor(private readonly moviesService: MoviesService) {}

	@Get()
	getAll() : Movie[] {
		return this.moviesService.getAll();
	}

	@Get(':id')
	getOne(@Param('id') movieId: number): Movie{
		console.log(typeof movieId);
		return this.moviesService.getOne(movieId);
	}
	
	@Post()
	create(@Body() movieData: CreateMovieDto){
		return this.moviesService.create(movieData);
	}

	@Delete(":id")
	remove(@Param('id') movieId: number){
		console.log(typeof movieId);
		return this.moviesService.deleteOne(movieId);
	}

	@Patch(':id')
	patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto){
		return this.moviesService.update(movieId, updateData);
	}

}
