class CommitList:
    @property
    def titles(self):
        return self._titles
    
    @property
    def hashes(self):
        return self.hashes
    
    @titles.setter
    def titles(self, value):
        self._titles(value)
    
    @hashes.setter
    def hashes(self, value):
        self._hashes(value)
    
    def __init__(self) -> None:
        self._titles = []
        self._hashes = []