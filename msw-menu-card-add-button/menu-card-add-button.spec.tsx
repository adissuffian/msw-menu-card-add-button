// Mock useHasSalePrice to avoid selector errors
jest.mock('@dominos/hooks-and-hocs/pricing/use-has-sale-price', () => ({
  useHasSalePrice: () => false,
}))
// Minimal test: Check if 'Add' button appears on MenuCard when showAddButton and ProductCardAddToOrder toggle are true
const mockToggleValues = { ProductCardAddToOrder: true }
const mockUseFeatureBool = jest.fn((toggleName) => mockToggleValues[toggleName])
jest.mock('@dominos/hooks-and-hocs/features', () => ({ useFeatureBool: mockUseFeatureBool }))

import React from 'react'
import { render } from '@testing-library/react-native'
import { MenuCard } from '../menu-card'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { server } from '../../../../../applications/olo.native/src/__fixtures__/msw/server'
import { rest } from 'msw'

// Minimal state for pricing selectors
const initialState = {
  pricing: {
    showSalePrice: false,
    salePrices: {},
    strikeThroughPrices: {},
  },
  // Add other slices if needed by MenuCard
}
const reducer = (state = initialState) => state
const store = createStore(reducer)

describe('MenuCard Add Button', () => {
  beforeEach(() => {
    // Example: Intercept a GET request to /api/products
    server.use(
      rest.get('/api/products', (req, res, ctx) => {
        return res(ctx.json({ products: [] }))
      })
    )
  })

  it('shows Add button when showAddButton and ProductCardAddToOrder are true', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MenuCard
          name="Test Product"
          type="Product"
          description="desc"
          price="$1.00"
          imageUrl="/img"
          onImagePress={() => {}}
          onButtonPress={() => {}}
          showAddButton={true}
        />
      </Provider>
    )
    expect(getByText('Add')).toBeTruthy()
  })
})
