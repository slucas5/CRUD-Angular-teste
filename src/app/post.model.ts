export interface Post {
  titulo: string;
  descricao: string;
  id: string;
}

export interface RequestCreate {
  titulo: string;
  descricao: string;
}

export interface RequestUpdate {
  titulo: string;
  descricao: string;
}

export interface ResponseUpdate {
  titulo: string;
  descricao: string;
  id: string;
}

export interface ResponseCriadoComSucesso {
  mensagem: string;
}
