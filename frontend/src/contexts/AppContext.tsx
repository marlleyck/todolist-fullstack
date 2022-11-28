import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from '../services/api';

import { TaskType } from '../@types/TaskType';

type AppContextType = {
    taskList: TaskType[] | undefined;
    apiIsArrived: boolean;
}

type AppContextProps = {
    children: ReactNode
}

export const AppContext = createContext({} as AppContextType)

export const AppContextProvider = ({ children }: AppContextProps) => {
    const [taskList, setTaskList] = useState<TaskType[] | undefined>()
    const [apiIsArrived, setApiIsArrived] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            const response = await api.get('/tasks', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setApiIsArrived(true)
            setTaskList(response.data.tasks)
            console.log(response.data.tasks)
        }

        fetchApi()
    }, [])

    return (
        <AppContext.Provider value={{ taskList, apiIsArrived }}>
            {children}
        </AppContext.Provider>
    );
}

