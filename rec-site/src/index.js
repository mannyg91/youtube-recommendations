import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, About, Contact } from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <App />
);
