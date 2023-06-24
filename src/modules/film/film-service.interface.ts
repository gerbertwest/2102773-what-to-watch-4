import {DocumentType} from '@typegoose/typegoose';
import {FilmEntity} from './film.entity.js';
import CreateFilmDto from './dto/create-film.dto.js';
import UpdateFilmDto from './dto/update-film.dto.js';
import { DocumentExistsInterface } from '../../types/document-exists.interface.js';

export interface FilmServiceInterface extends DocumentExistsInterface {
  create(dto: CreateFilmDto): Promise<DocumentType<FilmEntity>>;
  findById(filmId: string): Promise<DocumentType<FilmEntity> | null>;
  findByFilmName(filmName: string): Promise<DocumentType<FilmEntity> | null>;
  find(count?: number): Promise<DocumentType<FilmEntity>[]>;
  deleteById(filmId: string): Promise<DocumentType<FilmEntity> | null>;
  updateById(filmId: string, dto: UpdateFilmDto): Promise<DocumentType<FilmEntity> | null>;
  findByGenre(genre: string, count?: number): Promise<DocumentType<FilmEntity>[]>;
  findFavoriteFilms(user: string): Promise<DocumentType<FilmEntity>[] | null>;
  exists(documentId: string): Promise<boolean>;
  incCommentCount(filmId: string): Promise<DocumentType<FilmEntity> | null>;
  calculateRating(filmId: string): Promise<DocumentType<FilmEntity> | null>;
}
