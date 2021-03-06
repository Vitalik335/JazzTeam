import React, {Component} from 'react'


class Info extends Component{
    constructor(props){
        super(props);
        this.state = {
            reverted: false
        }
    
    }
    
    render(){

        return(
            <div>
                <h1>Таблица с данными</h1>
<p>Реализовать в приложении страницу, на которой будет отображена таблица с данными.
 Путь url, по которому страница будет доступна в приложении, на ваше усмотрение.</p>

<p>Страница должна быть закрыта без авторизации.</p>

<p>Исходные данные для таблицы реализовать в json формате и поместить в отдельный json файл.
 Какие именно данные на ваше усмотрение, проявите фантазию.</p>

<p>Количество колонок и строк должно быть таким, чтобы в таблице отображались горизонтальная и вертикальная полосы прокрутки.</p>

<p>Заголовки колонок таблицы должны быть зафиксированными, чтобы при вертикальном скролле они всегда отображалась на экране.</p>

<p>Первая колонка должна быть зафиксирована, чтобы при горизонтальном скролле она всегда отображалась на экране.</p>

<p>Реализовать выделение строк таблицы. Выделите любым цветом, на ваше усмотрение рамки, строки.</p>

<p>Реализовать панель состояния вверху или внизу таблицы, на которой должно быть отображено общее количество данных и количество выделенных строк в таблице.</p>

<p>Реализовать редактирование ячеек таблицы.</p>

            </div>
        )
    }

}

export default Info