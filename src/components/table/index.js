import React, {Component} from 'react'
import { connect } from 'react-redux';
import './style.css';
import '../table/react-sticky-table.css';
import { StickyTable, Row, Cell } from 'react-sticky-table';
import auth from '../data/film.json';
// import CoinTable from './components/coin-table'

class Table extends Component {
  state = {
    editingTd: null,
    rowsSelect: [],
    rows: auth,
  };

  onClickCell = (event) => {
    const { target } = event;
    const { state } = this;
    switch (target.className.trim()) {
      case 'edit-cancel':
        this.finishTdEdit(state.editingTd.elem, false);
        break;
      case 'edit-ok':
        this.finishTdEdit(state.editingTd.elem, true);
        break;
      default:
        break;
    }
    if (event.altKey) {
      if (target.parentNode.classList.contains('sticky-table-row')) {
        this.selectRow(target.parentNode);
      }
    }
  };

  editCell = (event) => {
    const { target } = event;
    const { state } = this;
    if (target.classList.contains('sticky-table-cell')) {
      if (state.editingTd) return;
      this.makeTdEditable(target);
    }
  };

  selectRow = (el) => {
    const { state } = this;
    if (!el.classList.contains('row-active')) {
      this.setState({
        rowsSelect: [...state.rowsSelect, el],
      });
      el.classList.add('row-active');
    } else {
      el.classList.remove('row-active');
      const rowsSelect = [...state.rowsSelect];
      const index = rowsSelect.indexOf(el);
      if (index !== -1) {
        rowsSelect.splice(index, 1);
        this.setState({ rowsSelect });
      }
    }
  };

  showList = () => {
    const { state } = this;
    return state.rows.map(film => (
      <Row key={film.id}>
        <Cell>{film.id}</Cell>
        <Cell>{film.Title}</Cell>
        <Cell>{film.Year}</Cell>
        <Cell>{film.Rated}</Cell>
        <Cell>{film.Released}</Cell>
        <Cell><img src={film.Images[1]} height="50" alt={film.Images[1]} /></Cell>
        <Cell>{film.Poster}</Cell>
      </Row>
    ));
  };

  showState = () => {
    const { state } = this;
    return (
      <div className="stateTable">
        <strong>State:</strong>
        {' '}
        {state.rows.length}
        <span>/</span>
        {state.rowsSelect.length}
      </div>
    );
  };

  makeTdEditable = (TD) => {
    const td = TD;
    this.setState({
      editingTd: {
        elem: td,
        data: td.innerHTML,
      },
    });

    td.classList.add('edit-td');

    const textArea = document.createElement('textarea');
    textArea.style.width = `${td.clientWidth}px`;
    textArea.style.height = `${td.clientHeight}px`;
    textArea.className = 'edit-area';

    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML('beforeEnd',
      '<div className="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>');
  };

  finishTdEdit = (TD, isOk) => {
    const { state } = this;
    const td = TD;
    td.innerHTML = (isOk) ? td.firstChild.value : state.editingTd.data;
    td.classList.remove('edit-td');
    this.setState({
      editingTd: null,
    });
  };

  render() {
    return (
      <section className="full-section">
        <h1 className="text-edit">Таблицы</h1>
      <div className="rules">
        <ol>
          <li>Для редактирования таблицы, кликните дважды по нужной вам ячейке</li>
          <li>Для выделения в таблице, используйте сочетание клавиш ALT + Левая клавиша мыши</li>
          <li>Число записей в таблице и число выделенных строк, можно посмотреть в строке состояния</li>
        </ol>
      </div>
        <h2>Содержимое таблицы</h2>

        <div role="grid" tabIndex={0} onClick={this.onClickCell} onKeyDown={this.onClickCell} onDoubleClick={this.editCell} style={{ width: '100%', height: '400px' }}>
          <StickyTable>
            <Row>
              <Cell>ID</Cell>
              <Cell>Название Фильма</Cell>
              <Cell>Год</Cell>
              <Cell>Рейтинг</Cell>
              <Cell>В прокате </Cell>
              <Cell>Постер</Cell>
              <Cell>Путь постера</Cell>
            </Row>
            { this.showList() }
          </StickyTable>
        </div>
        { this.showState() }
      </section>
    );
  }
}



export default Table;
