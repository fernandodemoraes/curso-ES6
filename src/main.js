import api from './api';

/**
 * Classe App
 */
class App {

    /**
     * Construtor
     */
    constructor() {
        this.repositorios      = [];
        this.elementoContainer = document.getElementById('container');
        this.elementoForm      = document.getElementById('repo-form');
        this.elementoInput     = document.querySelector('input[name=repositorio');
        this.elementoList      = document.getElementById('repo-list');
        this.registroHandlers();
    }

    /**
     * Disparo do evendo addRepositorio
     */
    registroHandlers() {
        // utilizando arrow function para adicionar o repositório quando disparar o submit
        this.elementoForm.onsubmit = event => this.addRepositorio(event);
    }

    /**
     * Set loading
     * 
     * @param {*} loading 
     */
    setLoading(loading = true) {
        if (loading === true) {
            let elementoLoading = document.createElement('i');
            elementoLoading.className = 'fas fa-sync fa-spin fa-7x';
            elementoLoading.setAttribute('id', 'loading');

            this.elementoContainer.appendChild(elementoLoading);
        } else {
            document.getElementById('loading').remove();
        }
    }

    /**
     * Evento de adicionar um repositório
     * 
     * @param {*} event 
     */
    async addRepositorio(event) {
        event.preventDefault();

        const repositorioInput = this.elementoInput.value;

        if (repositorioInput.length === 0) {
            return;
        }

        this.setLoading();

        try {
            const resposta = await api.get(`/repos/${repositorioInput}`);
    
            const { name, description, html_url, owner: { avatar_url } } = resposta.data;
    
            this.repositorios.push({
                name,
                description,
                avatar_url,
                html_url,
            });
    
            this.elementoInput.value = '';
    
            this.render();
        } catch (err) {
            alert('O repositório não existe.');
        }

        this.setLoading(false);
    }

    /**
     * Renderizar o html na tela
     */
    render() {
        this.elementoList.innerHTML = '';

        this.repositorios.forEach(repo => {
            
            // criação dos elementos html
            let divCard = document.createElement('div');
            divCard.className = 'card mb-4 shadow-sm';
            
            let imgElemento = document.createElement('img');
            imgElemento.className = 'card-img-top';
            imgElemento.setAttribute('src', repo.avatar_url);
            
            let divCardBody = document.createElement('div');
            divCardBody.className = 'card-body';

            let blockquote = document.createElement('blockquote');
            blockquote.className = 'blockquote text-center';

            let descricaoElemento = document.createElement('p');
            descricaoElemento.className = 'mb-0';
            descricaoElemento.appendChild(document.createTextNode(repo.description));

            let footerCard = document.createElement('footer');
            footerCard.className = 'blockquote-footer';

            let tituloElemento = document.createElement('cite');
            tituloElemento.title = 'Título da fonte';
            tituloElemento.appendChild(document.createTextNode(repo.name));

            let alinharCentro = document.createElement('footer');
            alinharCentro.className = 'd-flex justify-content-between align-items-center';

            let divBtnGroup = document.createElement('div');
            divBtnGroup.className = 'btn-group';

            let linkElemento = document.createElement('a');
            linkElemento.setAttribute('href', repo.html_url);
            linkElemento.className = 'btn btn-sm btn-outline-secondary';
            linkElemento.setAttribute('target', '_blank');
            linkElemento.appendChild(document.createTextNode('Acessar'));

            // agrupamento dos elementos
            let elementoList = document.createElement('div');
            elementoList.className = 'col-md-3';

            let divCardGrupo = elementoList.appendChild(divCard);
            divCardGrupo.appendChild(imgElemento);

            let divCardBodyGrupo = divCardGrupo.appendChild(divCardBody);
            let blockquoteGrupo = divCardBodyGrupo.appendChild(blockquote);
            blockquoteGrupo.appendChild(descricaoElemento);

            let footerCardGrupo = blockquoteGrupo.appendChild(footerCard);
            footerCardGrupo.appendChild(tituloElemento);

            let alinharCentroGrupo = divCardBodyGrupo.appendChild(alinharCentro);
            let divBtnGroupLink = alinharCentroGrupo.appendChild(divBtnGroup);
            divBtnGroupLink.appendChild(linkElemento);

            this.elementoList.appendChild(elementoList);
        });
    }
}

new App();