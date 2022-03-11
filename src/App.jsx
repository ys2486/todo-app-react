import React from 'react';
import './index.css';

export const App = () => {
  return (
    <>
      {/* 入力エリア */}
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      {/* 未完了のTODO */}
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      {/* 完了のTODO */}
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>ううううう</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>えええええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
