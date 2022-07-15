import { createSlice } from "@reduxjs/toolkit"

const initialBooks={
    books:[
        {
            id:1,
            title:"Easy Programming",
            author:"Najmul"
        },
        {
            id:2,
            title:"Go Programming",
            author:"Najmul"
        }
    ]
}

export const booksSlice= createSlice({
    name:"books",
    initialState: initialBooks,
    reducers:{
        showBooks: (state)=>state
    }
})

export const {showBooks}= booksSlice.actions;
export default booksSlice.reducer;