import {makeAutoObservable} from "mobx";

export default class User {
    constructor() {
        this._user = {};
        this._tagList = ['tag1', 'tag5', 'tag11']
        makeAutoObservable(this)
    }

    get user() {
        return this._user;
    }

    get tagList() {
        return this._tagList;
    }

    removeTag(tag) {
        const index = this._tagList.indexOf(tag);
        if (index !== -1) {
            this._tagList.splice(index, 1);
        }
    }
}