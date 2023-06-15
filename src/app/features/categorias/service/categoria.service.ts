import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';

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
}
