import React from 'react';
import Picker, { Swatches, OpacitySlider, HueSlider, Panel3, Preview, returnedResults} from 'reanimated-color-picker';


interface PickerProps {
  onSelect?: (c: returnedResults) => void
}

export default function ColorPicker(props: PickerProps) {
  return (
    <Picker
      style={{ width: '70%', rowGap:10 }}
      value='red'
      onComplete={props.onSelect}
    >
      <Preview />
      <Panel3 />
      <HueSlider />
      <OpacitySlider />
      <Swatches />
    </Picker>
  );
}

