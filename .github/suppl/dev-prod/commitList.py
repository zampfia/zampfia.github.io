class CommitList:
    @property
    def titles(self):
        return self._titles
    
    @titles.setter
    def titles(self, value):
        self._titles = value
    
    @property
    def hashes(self):
        return self._hashes
    
    @hashes.setter
    def hashes(self, value):
        self._hashes = value
    
    def __init__(self):
        self._titles = list()
        self._hashes = list()