import "./Blog1.css";
import Postagem from "./Postagem1";

function Blog() {
    return (
        <section className="blog">
            <h2>Tarefas Soul Code</h2>
            <Postagem titulo="Estudando React" desc="Descrição da postagem 1" linkImagem="https://picsum.photos/200" legenda="Imagem aleatória" />
            <Postagem titulo="Estudando CSS" desc="Descrição da postagem 2" linkImagem="https://picsum.photos/200" legenda="Imagem aleatória" />
            <Postagem titulo="Estudando JS" desc="Descrição da postagem 2" linkImagem="https://picsum.photos/200" legenda="Imagem aleatória" />
        </section>
    );
}

export default Blog1;