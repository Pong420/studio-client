import { useDataSocket } from '@/hooks/useDataSocket';
import { BonusProto } from '@/protobuf';

export const { BonusState } = BonusProto;

const { PICK, PICK_ENDED, FLIP, FLIP_ENDED } = BonusState;

function parseJockerCounters([gold = 0, black = 0]: number[] = []) {
  return {
    gold,
    black
  };
}

// https://code-dev/live_game_server/live_protocol/-/blob/feature/sjoh/bonus.proto#L33-37
function parseBonus(bonus?: BonusProto.IBonus | null) {
  let state: BonusProto.BonusState = BonusState.NONE;

  if (typeof bonus?.state === 'number') {
    state = bonus.state & (FLIP | FLIP_ENDED);

    if (!(state === FLIP || state === FLIP_ENDED)) {
      state = bonus.state & (PICK | PICK_ENDED);
    }
  }

  return {
    ...bonus,
    state,
    counters: parseJockerCounters(bonus?.counters || [])
  };
}

export function useGameState() {
  const { snapshot } = useDataSocket();
  return parseBonus(snapshot?.bonus);
}
