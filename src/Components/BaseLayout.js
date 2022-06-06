import React from 'react';
import { useMachine } from '@xstate/react';
import bookingMachine from '../Machines/bookingmachine';

export const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);

    console.log('nuestra maquina', state);
    return (
        <div>Hola</div>
    );
}
