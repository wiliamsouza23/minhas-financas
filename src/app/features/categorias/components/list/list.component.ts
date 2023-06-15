import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriaService } from '../../service/categoria.service';

export interface Categoria {
  id: number;
  nome: string;
  descricao: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit, OnInit{
  
  constructor(private categoriaService: CategoriaService){
  }
  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe((categoria: Categoria[]) => {
      this.categorias = categoria;
      this.dataSource.data = this.categorias;
    })
  }
  
  displayedColumns: string[] = [ 'nome', 'descricao' ];
  dataSource = new MatTableDataSource<Categoria>();
  categorias : Categoria[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
