import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native'

interface Props {
  placeholder: string
  label: string
  value: string
  onChange: () => void
}

const Input = ({ label, placeholder, value, onChange, ...props }: Props & TextInputProps) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
          {...props}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: '#252525', // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: 'transparent', // Same as background color because elevation: 1 creates a shadow that we don't want
    position: 'absolute', // Needed to be able to precisely overlap label with border
    top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
  },
  label: {
    color: '#6B737A',
  },
  inputContainer: {
    borderWidth: 1, // Create border
    borderRadius: 12, // Not needed. Just make it look nicer.
    borderColor: '#6B737A',
    padding: 8, // Also used to make it look nicer
    zIndex: 0, // Ensure border has z-index of 0
  },
  input: {
    height: 40,
    color: '#ffffff',
  },
})

export default Input
