import {makeAutoObservable} from "mobx";

export default class User {
    constructor() {
        this._user = {};
        this._tagList = ['secretTag', 'tag5', 'ForMom']
        makeAutoObservable(this)
    }

    get user() {
        return this._user;
    }

    get tagList() {
        return this._tagList;
    }

    setTags(tags) {
        for(const element of tags) {
            if (!this._tagList.includes(element)) {
                this._tagList.push(element)
            }
        }
    }

    removeTag(tag) {
        const index = this._tagList.indexOf(tag);
        if (index !== -1) {
            this._tagList.splice(index, 1);
        }
        console.log(this._tagList)
    }
}