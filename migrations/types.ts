

export interface DocumentPatch<T extends Patch> {
    id: string
    patch: T
}

interface Patch {
    ifRevisionID: string
}

export interface RemoveFieldsPatch extends Patch {
    unset: string[]
}

export interface RenameFieldsPatch extends Patch {
    unset: string[]
    set: Record<string, any>
}