import React, { Component } from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'

import { colors } from '@src/style'

export interface IModalActivityIndicatorStateProps {
  modalVisible: boolean
}

// NOTE: Component must not know what will happen when button pressed.
// just passing event to parent (container) and container handles the event by emitting action of Redux.
export interface IModalActivityIndicatorDispatchProps {
  closeModal: () => void
}

interface IModalActivityIndicator
  extends IModalActivityIndicatorStateProps,
    IModalActivityIndicatorDispatchProps {}

export class ModalActivityIndicator extends Component<
  IModalActivityIndicator,
  any
> {
  constructor(props: IModalActivityIndicator) {
    super(props)
  }

  public render() {
    const { modalVisible, closeModal } = this.props
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <View
            style={{
              borderRadius: 10,
              alignItems: 'center',
              width: 80,
              height: 80,
              backgroundColor: 'rgba(0,0,0,0.75)',
            }}
          >
            <ActivityIndicator
              style={[
                styles.acctivityIndicator,
                { transform: [{ scale: 2.0 }] },
              ]}
              color={colors.progressColorLight}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  modal: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',
  },
  acctivityIndicator: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
