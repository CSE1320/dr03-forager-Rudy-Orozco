########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Rudy_Orozco
SID = 1001864902
EMAIL = rjo4902@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=PROJ03
URL=https://youtu.be/zJRzfR4S2DI

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"