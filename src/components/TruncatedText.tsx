import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface TruncatedTextProps {
  text: string;
  maxLines?: number;
  posted_picture: string;
}

export const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLines = 3, posted_picture }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <View>
      <Text style={{marginHorizontal: 24, marginTop: 24, marginBottom: 2}} numberOfLines={isExpanded ? undefined : maxLines}>{text}</Text>
      {!isExpanded && (
        <TouchableOpacity onPress={handleToggle}>
          <Text style={{ color: 'blue',marginHorizontal: 24, marginBottom: 24 }}>View more...</Text>
        </TouchableOpacity>
      )}
      {isExpanded && (
        <TouchableOpacity onPress={handleToggle}>
          <Text style={{ color: 'blue',marginHorizontal: 24, marginBottom: 24 }}>Less view</Text>
        </TouchableOpacity>
      )}
      <Image
        source={{
            uri: posted_picture,
        }}
        height={isExpanded ? 200 : 100}
        />
    </View>
  );
};