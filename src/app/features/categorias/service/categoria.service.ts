import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';
import { Categoria } from '../components/models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends HttpBaseService {

  private endpoint = 'categorias';

  constructor(protected override readonly injector: Injector) { 
    super(injector);
  }
  getCategorias(): Observable<any>{
    return this.httpGet(this.endpoint);
  }
  getCategoriaPeloId(id: number): Observable<any>{
    return this.httpGet(`${this.endpoint}/${id}`);
  }
  criarCategoria(payload: Categoria): Observable<any>{
    return this.httpPost(`${this.endpoint}`, payload);
  }
  alterarCategoria(payload: Categoria): Observable<any>{
    return this.httpPut(`${this.endpoint}/${payload.id}`, payload);
  }
  excluirCategoria(id: number): Observable<any>{
    return this.httpDelete(`${this.endpoint}/${id}`);
  }
}