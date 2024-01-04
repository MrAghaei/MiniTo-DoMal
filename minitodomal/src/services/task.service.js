import { localStorageKey } from '../models/local-storage-key.js';

export function setTasksData(tasks) {
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
}
export function getTaskData() {
  const localData = localStorage.getItem(localStorageKey);
  return localData ? JSON.parse(localData) : [];
}
