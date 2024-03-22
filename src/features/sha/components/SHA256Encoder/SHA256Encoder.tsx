'use client';

import { CopyTextarea } from '@/components';
import { Checkbox, Code, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { sha256encode } from '../../utils';

export function SHA256Encoder() {
  const [decoded, setDecoded] = useState<string | undefined>('');
  const [encoded, setEncoded] = useState<string | undefined>('');
  const [lineByLine, setLineByLine] = useState(false);

  useEffect(() => {
    if (decoded === undefined || decoded === '') return;
    if (lineByLine)
      return setEncoded(
        decoded
          ?.split('\n')
          .filter(v => v !== '')
          .map(sha256encode)
          .join('\n')
      );
    setEncoded(sha256encode(decoded));
  }, [decoded, lineByLine]);

  return (
    <Stack>
      <Text>
        To encode a string, paste it into the encoding field and the encoded value will update
        automatically. Hashing functions are <b>not reversible</b>, so you cannot decode the value
        back to the original string. This is <b>useful for storing passwords</b> or other sensitive
        data <b>that you don&apos;t need to decode</b>. If you need to encode or decode a file, use
        the <Code>Files</Code> tab.
      </Text>
      <CopyTextarea
        rows={8}
        label='Value to encode'
        error={encoded === undefined ? 'Value cannot be encoded' : undefined}
        copyValue={decoded || ''}
        value={decoded}
        onChange={e => {
          setDecoded(e.currentTarget.value);

          if (e.currentTarget.value === '') return setEncoded('');

          if (lineByLine)
            return setEncoded(
              e.currentTarget.value
                .split('\n')
                .filter(v => v !== '')
                .map(sha256encode)
                .join('\n')
            );

          setEncoded(sha256encode(e.currentTarget.value));
        }}
      />
      <Checkbox
        checked={lineByLine}
        label='Encode line by line'
        onChange={() => setLineByLine(p => !p)}
      />
      <CopyTextarea
        rows={8}
        label='Encoded value'
        copyValue={encoded || ''}
        value={encoded}
        readOnly
      />
    </Stack>
  );
}
