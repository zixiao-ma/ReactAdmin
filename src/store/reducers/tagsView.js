/**
 * @author MaZiXiao
 * @date 2022-10-07 17:29
 */
import {getItem, setItem} from "../../utils/storage";
import {TAGSVIEW_KEY} from "../../utils/config";
import React from "react";

const initState = {
    tags: getItem(TAGSVIEW_KEY) || []
}
export default function tags(state = initState, action) {
    switch (action.type) {
        case 'tags/add':
            let index = state.tags.findIndex(v => v.key === action.payload.key)
            if (index === -1) {
                setItem(TAGSVIEW_KEY, [...state.tags, action.payload])
                return {
                    ...state,
                    tags: [...state.tags, action.payload]
                }
            } else {
                return state
            }
        case 'tags/del':
            console.log(action.payload, 'a')
            let newTags = state.tags.filter(item => item.key !== action.payload);
            setItem(TAGSVIEW_KEY, newTags)
            return {
                ...state,
                tags: newTags
            }

    }
    return state
}
