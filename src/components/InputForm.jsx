import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        // preventDefault = 再レンダリングの機能がなくなる
        e.preventDefault();

        // inputに打ち込んだ文字をコンソールに出力したい
        // console.log(inputText);

        // タスクを追加する
        setTaskList([
            // ... = スプレッド構文（以前の配列の情報が入っている）
            ...taskList, 
            {
                id: taskList.length,
                text: inputText,
                // 取り消し線なし
                completed: false
            }
        ]);
        // console.log(taskList);
        // フォーム入力した文字を消す
        setInputText("");
    }


    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div className='inputForm'>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputText}/>
                <button>
                    <i className="far fa-plus-square"></i>
                </button>
            </form>
        </div>
    )
}
