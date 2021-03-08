import { createContext, ReactNode, useState } from 'react';
import { ListPlanet } from '../components/ListPlanet';
import { ListPeople } from '../components/ListPeople';
import { ListStarship } from '../components/ListStartship';



interface ChallengesProviderProps {
    children: ReactNode;
}

interface ChallengesContextData {
    startListPlanet(): void;
    closeListPlanet: () => void;
    startListPeople(): void;
    closeListPeople: () => void;
    startListStarship(): void;
    closeListStarship: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [isListPlanetOpen, setIsListPlanetOpen] = useState(false);
    const [isListPeopleOpen, setIsListPeopleOpen] = useState(false);
    const [isListStarshipOpen, setIsListStarshipOpen] = useState(false);


    function startListPlanet() {
        setIsListPlanetOpen(true);
    }

    function startListPeople() {
        setIsListPeopleOpen(true);
    }

    function startListStarship() {
        setIsListStarshipOpen(true);
    }

    function closeListPlanet() {
        setIsListPlanetOpen(false);
    }

    function closeListPeople() {
        setIsListPeopleOpen(false);
    }

    function closeListStarship() {
        setIsListStarshipOpen(false);
    }

    return (
        <ChallengesContext.Provider value={{

            startListPlanet,
            closeListPlanet,
            startListPeople,
            closeListPeople,
            startListStarship,
            closeListStarship
        }}>
            {children}

            { isListStarshipOpen && <ListStarship />}
            { isListPeopleOpen && <ListPeople />}
            { isListPlanetOpen && <ListPlanet />}
        </ChallengesContext.Provider>
    );
}