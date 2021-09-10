import React from 'react'
import { render, screen } from '@testing-library/react'

import Player from '../../components/Player.js'

describe('Player', () => {

    test('given a player', () => {
        render(
            <Player
                index='0'
                name='testPlayer'
                score='0'
                newScore='0'
                handleNewPlayerScore=''
            ></Player>
        )

        screen.debug()
    })
})
