import {emptyState} from '../../models/state.model';
import {EmissionsState} from '../../models/emission.model';

export const initialEmissionsState: EmissionsState = {
    emissions: emptyState(),
    selectedEmissionId: null
}

