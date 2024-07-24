
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_BASE_URL}),
    reducerPath:"main",
    tagTypes:[],
    endpoints:(build)=>({
        postAiText:build.mutation({
            query:(payLoad)=>({
                url:"openai/text",
                method:"POST",
                body:payLoad

    
            })
        })

    })
   
})

export const  {
 usePostAiTextMutation
}=api;